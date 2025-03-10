import React, { useEffect } from "react";
const DonateButton = () => {
  return (
    <div className="flex justify-center">
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="ULPCKKJEA6J8W" />
        <button type="submit">
          <img
            src="https://pics.paypal.com/00/s/MWE3NDQ2YTctZDY2MC00ZjJhLWE3OTYtZTc0Yzk5ZjY1ZmZm/file.PNG"
            alt="Donate with PayPal"
            className="w-40 mt-2 h-auto"
          />
        </button>
      </form>
    </div>
  );
};

export default DonateButton;
