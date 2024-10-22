export function transformIndexToMonth(index: number) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[index];
}

export function formatDate(date: Date) {
  const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  const options = { month: "long", day: "numeric" };
  return utcDate.toLocaleString("en-US", options as any);
}
