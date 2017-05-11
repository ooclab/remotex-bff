exports.dateFriendlyFilter = date => {
    let now = new Date().getTime();
    let aim = new Date(date).getTime();

    if (now - aim < 1000 * 3600 * 24) return "今天";
    if (now - aim < 1000 * 3600 * 48) return "昨天";
    if (now - aim < 1000 * 3600 * 72) return "前天";

    if (now - aim < 1000 * 3600 * 24 * 30) {
      let days = Math.floor((now - aim)/(1000 * 3600 * 24));
      return days + "天前";
    }

    let months = Math.floor((now - aim)/(1000 * 3600 * 24 * 30));
      return days + "个月前";
};