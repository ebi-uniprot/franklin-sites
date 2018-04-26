const checkPatternAttributes = component => {
    if (!component.name || !component.purpose || !component.function) {
        return;
    }
    return component;
};

export default checkPatternAttributes;
