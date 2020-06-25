export const trimText = (text, limit) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;

export const format = (date) =>
  new Date(date).toLocaleDateString("ko", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
