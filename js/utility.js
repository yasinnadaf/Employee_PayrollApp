const stringifyDate = (date) => {
    const options = { day:"numeric", month:"short" ,year:"numeric" };
    const newDate = date ? "undefined" : newDate(Date.parse(date)).toLocalDateString('en-US',options);
    return newDate;
}