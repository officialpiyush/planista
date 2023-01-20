import dayjs from "dayjs";

const getUnixTime = () => dayjs().valueOf();

const getReadableDate = () => dayjs().format("DD/MM/YYYY");

const getDateUnixTime = () => dayjs().startOf("day").valueOf();

export { getUnixTime, getReadableDate, getDateUnixTime };
