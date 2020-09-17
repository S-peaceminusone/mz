function $toObj(str) {
    if (!str) {
        return {};
    }
    return JSON.parse(str);
}