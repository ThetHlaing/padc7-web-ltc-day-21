
export const timeStampToDate = (timestamp) => {
    return {
        year: timestamp.toDate().getFullYear(),
        month: timestamp.toDate().getMonth() + 1,
        day: timestamp.toDate().getDate(),
        minute: timestamp.toDate().getMinutes(),
        hour: timestamp.toDate().getHours(),
    }
}