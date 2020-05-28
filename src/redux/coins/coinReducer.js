import {
  INCREMENT_COIN,
  DECREMENT_COIN,
  CALCULATE,
  SETTOPAY,
  SETPAYED,
} from "./coinExport";
import produce from "immer";

const initialState = {
  coin: [
    { id: 0, value: 5.0, count: 10 },
    { id: 1, value: 2.0, count: 10 },
    { id: 2, value: 1.0, count: 10 },
    { id: 3, value: 0.5, count: 10 },
    { id: 4, value: 0.2, count: 10 },
    { id: 5, value: 0.1, count: 10 },
  ],
  toPay: 0,
  payed: 0,
  difference: 0,
  outputString: "",
  buttonDIsabled: false,
  disablePay: true,
  numOfCoinsUsed: 0,
};

function doStaff(state) {
  let finalState = {
    ...state,
    numOfCoinsUsed: 99999,
  };

  let pomState = { ...state, numOfCoinsUsed: 0 };

  let redoIndex = 0;
  let limit = 0;

  //Calculating using modified greedy algorithm
  //take one index, first max number of times, then max-1, max-2..
  //compare number of coins used in each calculation and save the lowest
  while (redoIndex < pomState.coin.length) {
    if (pomState.coin[redoIndex].value > pomState.difference) redoIndex++;

    let maxNum = Math.floor(
      pomState.difference / pomState.coin[redoIndex].value
    );

    maxNum =
      maxNum > pomState.coin[redoIndex].count
        ? pomState.coin[redoIndex].count
        : maxNum;

    let deduct = maxNum - limit;

    if (deduct > 0) {
      pomState = produce(pomState, (draft) => {
        draft.difference = (
          draft.difference -
          draft.coin[redoIndex].value * deduct +
          0.001
        ).toFixed(1);
        draft.coin[redoIndex].count -= deduct;
        draft.numOfCoinsUsed += deduct;
        draft.outputString = "";
      });

      pomState = calculate(pomState, 0, redoIndex);

      if (pomState.numOfCoinsUsed < finalState.numOfCoinsUsed)
        finalState = { ...pomState };

      pomState = { ...state, numOfCoinsUsed: 0 };

      limit++;
    } else {
      redoIndex++;
      limit = 0;
    }
  }

  if (finalState.difference != 0) {
    return {
      ...state,
      outputString: "Not Possible to return change",
      disablePay: false,
      buttonDIsabled: true,
    };
  }
  return { ...finalState, outputString: "Accepted!" };
}

function calculate(state, index, skipIndex, numofCoins) {
  if (index === skipIndex) index++;

  if (state.difference == 0) {
    return state;
  }

  if (index > 5 && state.difference != 0) {
    return {
      ...state,
      numOfCoinsUsed: 99999,
    };
  }

  const deductFromCoinsCount = Math.floor(
    state.difference / state.coin[index].value
  );

  if (
    deductFromCoinsCount > 0 &&
    state.coin[index].count >= deductFromCoinsCount
  ) {
    state = produce(state, (draft) => {
      draft.difference = (
        draft.difference -
        state.coin[index].value * deductFromCoinsCount +
        0.001
      ).toFixed(1);
      draft.coin[index].count -= deductFromCoinsCount;
      draft.numOfCoinsUsed += deductFromCoinsCount;
    });
    return calculate(state, index + 1, skipIndex);
  }
  if (
    deductFromCoinsCount > 0 &&
    state.coin[index].count < deductFromCoinsCount
  ) {
    state = produce(state, (draft) => {
      draft.difference = (
        draft.difference -
        state.coin[index].value * state.coin[index].count +
        0.001
      ).toFixed(1);
      draft.coin[index].count = 0;
      draft.numOfCoinsUsed += draft.coin[index].count;
    });
    return calculate(state, index + 1, skipIndex);
  }

  if (
    state.difference < state.coin[index].value ||
    state.coin[index].count < 1
  ) {
    return calculate(state, index + 1, skipIndex);
  }
}

function incrCoin(state = initialState, action) {
  return produce(state, (draft) => {
    draft.coin[action.payload].count += 1;
  });
}
function decrCoin(state, action) {
  if (state.coin[action.payload].count > 0) {
    return produce(state, (draft) => {
      draft.coin[action.payload].count -= 1;
    });
  } else return state;
}
function setPayedAmount(state, action) {
  var result = Number(action.payload - state.toPay).toFixed(1);

  if (result > 0) {
    return produce(state, (draft) => {
      draft.payed = action.payload;
      draft.difference = Number(action.payload - draft.toPay).toFixed(1);
      draft.disablePay = true;
      draft.buttonDIsabled = false;
      draft.outputString = "";
    });
  } else if (result == 0) {
    return produce(state, (draft) => {
      draft.difference = 0;
      draft.disablePay = true;
      draft.buttonDIsabled = false;
      draft.outputString = "Accepted";
    });
  } else {
    return produce(state, (draft) => {
      draft.outputString = "You need to pay more money, input correct amount !";
      draft.difference = -1;
    });
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const coinReducer = (state = initialState, action) => {
  //from : https://daveceddia.com/react-redux-immutability-guide/#redux-add-an-item-to-an-array
  switch (action.type) {
    case INCREMENT_COIN: {
      return incrCoin(state, action);
    }
    case DECREMENT_COIN: {
      return decrCoin(state, action);
    }

    case CALCULATE: {
      return doStaff(state);
    }
    case SETPAYED: {
      return setPayedAmount(state, action);
    }

    case SETTOPAY: {
      return produce(state, (draft) => {
        draft.toPay = Number(randomIntFromInterval(100, 300) * 0.1).toFixed(1);
        draft.buttonDIsabled = true;
        draft.disablePay = false;
      });
    }

    default:
      return state;
  }
};

export default coinReducer;
