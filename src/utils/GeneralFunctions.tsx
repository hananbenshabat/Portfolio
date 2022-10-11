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
};

export default GeneralFunctions;
