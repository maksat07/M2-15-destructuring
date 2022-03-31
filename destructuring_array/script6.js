function getDate() {
	return (new Date).getDate();
  }

function getMonth() {
    return new Date().getMonth();
  }
  
  function Year() {
    return new Date().getFullYear();
  }

  let arr = [2022];
  let [year = getYear(), month = getMonth(), day = getDate()] = arr;
  console.log(year);
  console.log(month);
  console.log(day);
