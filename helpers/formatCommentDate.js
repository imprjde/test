export const formatCommentDate = (inputDate) => {
    const currentDate = new Date();
    const inputDateObj = new Date(inputDate);
  
    const timeDifference = currentDate.getTime() - inputDateObj.getTime();
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
    const weeksDifference = Math.floor(daysDifference / 7);
    const monthsDifference = Math.floor(daysDifference / 30);
    const yearsDifference = Math.floor(daysDifference / 365);
  
    if (yearsDifference > 0) {
      return (
        yearsDifference + (yearsDifference === 1 ? " year ago" : " years ago")
      );
    } else if (monthsDifference > 0) {
      return (
        monthsDifference + (monthsDifference === 1 ? " month ago" : " months ago")
      );
    } else if (weeksDifference > 0) {
      return (
        weeksDifference + (weeksDifference === 1 ? " week ago" : " weeks ago")
      );
    } else if (daysDifference > 0) {
      return daysDifference + (daysDifference === 1 ? " day ago" : " days ago");
    } else if (hoursDifference > 0) {
      return (
        hoursDifference + (hoursDifference === 1 ? " hour ago" : " hours ago")
      );
    } else if (minutesDifference > 0) {
      return (
        minutesDifference +
        (minutesDifference === 1 ? " minute ago" : " minutes ago")
      );
    } else {
      return (
        secondsDifference +
        (secondsDifference === 1 ? " second ago" : " seconds ago")
      );
    }
  };
  