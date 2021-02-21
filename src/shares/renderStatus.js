const renderStatus = (status) => {
  if (status == 2) return "Preparing";
  if (status == 3) return "Completed";
  if (status == 4) return "Refunded";
};

export default { renderStatus };
