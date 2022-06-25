const getCleanObject = (mealObject, strToFind1, strToFind2) => {
    const strToFind1Keys = getMatchingListPropertyName(mealObject, strToFind1);
    const resultObj = createCombineObject(mealObject, strToFind1Keys, strToFind2);
    return resultObj;

}

const getMatchingListPropertyName = (mealObject, strToFind) => {
    const resultObject = [];
    for (const prop in mealObject) {
        if (prop.includes(strToFind) && mealObject[prop]) {
            resultObject.push(prop);
        }
    }
    return resultObject;
};

const createCombineObject = (originalObj, listOfProps, baseUrl) => {
    const resultsObj = {};
    const regex = /(\d+)/;

    for (let i = 0; i < listOfProps.length; i++) {
        const digit = listOfProps[i].match(regex)[0];
        const propToMatch = `${baseUrl}${digit}`;
        resultsObj[originalObj[listOfProps[i]]] = originalObj[propToMatch];
    }
    return resultsObj;
};

module.exports = getCleanObject;