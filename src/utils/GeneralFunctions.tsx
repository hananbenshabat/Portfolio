const GeneralFunctions = {
  stringifyArrWithSeparator: function (arr: string[], separator: string) {
    let str: string;

    arr.forEach((currLastNameWord) => {
      if (str !== undefined) {
        str += separator + currLastNameWord;
      } else {
        str = currLastNameWord;
      }
    });

    return str;
  },

  stringifyArr: function (arr: string[]) {
    return GeneralFunctions.stringifyArrWithSeparator(arr, "");
  },

  calculateAge: function (birthDate: Date) {
    var today = new Date();
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }

    return age_now;
  },

  openInNewTab: function (url: string | URL) {
    window.open(url, "_blank", "noopener,noreferrer");
  },

  getCurrentDate: function (): string {
    var today: Date = new Date();
    var year: number = today.getFullYear();
    var month: number = today.getMonth() + 1;

    return (month < 10 ? "0" + month : month) + "/" + year;
  },
};

export default GeneralFunctions;
