export const toTitleCase = (str: string) => {
  return str
    .split(" ")
    .map((v) => {
      return v.charAt(0).toUpperCase() + v.substring(1).toLocaleLowerCase();
    })
    .join(" ");
};

export const toSlug = (str: string): string => {
  return str.replace(/\s+/g, "-").toLocaleLowerCase();
};

export const getReadTime = (str: string) => {
  return Math.floor(str.split(" ").length / 200);
};

export const getFormatedDate = (unix: Date) => {
  const monthArray = [
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

  const date = new Date(unix);

  const tanggal = date.getDate();
  const tahun = date.getFullYear();
  const bulan = monthArray.filter((v, i) => {
    if (date.getMonth() === i) {
      return v;
    }
  });

  if (tahun !== new Date().getFullYear()) {
    return `${bulan} ${tanggal} ${tahun}`;
  }

  return `${bulan} ${tanggal}`;
};
