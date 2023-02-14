import React from "react";

const HeadCustom = () => {
  const title = "Storefront";
  const description = "storefront";
  return (
    <>
      <title>{title || "Storefront"}</title>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      ></meta>
      <meta
        key="mobile-web-app-capable"
        name="mobile-web-app-capable"
        content="yes"
      ></meta>
      <meta
        key="apple-mobile-web-app-capable"
        name="apple-mobile-web-app-capable"
        content="false"
      ></meta>
      <meta
        key="apple-mobile-web-app-title"
        name="apple-mobile-web-app-title"
        content={title || "storefront"}
      ></meta>
      <meta
        key="description"
        name="description"
        content={description || "storefront"}
      ></meta>
      <meta key="theme-color" name="theme-color" content="#1B1B1B"></meta>
      <meta key="og:type" name="og:type" content="website"></meta>
      <meta
        key="og:title"
        name="og:title"
        content={title || "storefront"}
      ></meta>
      <meta
        key="og:site_name"
        name="og:site_name"
        content={title || "storefront"}
      ></meta>
      <meta
        key="og:description"
        name="og:description"
        content={description || "storefront"}
      ></meta>
    </>
  );
};

export default HeadCustom;
