import React from "react";

const LoadingScreen = () => {
  return (
    <div style={{backgroundColor:"black"}} className="flex justify-center items-center h-screen">
      <div>
        <img
          src="https://bestof.nyc3.digitaloceanspaces.com/devsnap.me/sam/text-ring-loading-animation.gif"
          alt="http://csshint.com/wp-content/uploads/2019/05/CSS-Loading-Spinner.gif"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;


// https://cdn.dribbble.com/users/450343/screenshots/2465762/media/97b14be7af51dcea4d8ae244c545769b.gif