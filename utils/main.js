const dynamicSort = (property) => {
    let sortOrder = 1
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    const ret = (a, b) => {
        result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }

    return ret
}

export { dynamicSort }