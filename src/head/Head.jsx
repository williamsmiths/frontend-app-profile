import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { injectIntl, intlShape } from "@edx/frontend-platform/i18n";
import { getConfig } from "@edx/frontend-platform";

import messages from "./messages";
console.log("getConfig", getConfig());

const Head = ({ intl }) => {
  useEffect(() => {
    // Remove existing favicon links to ensure our favicon takes priority
    const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
    existingFavicons.forEach((link) => link.remove());

    // Add our custom favicon
    const link = document.createElement("link");
    link.rel = "shortcut icon";
    link.type = "image/x-icon";
    link.href = `${getConfig().LMS_BASE_URL}/static/indigo/images/favicon.ico`;
    document.head.appendChild(link);
  }, []);

  return (
    <Helmet>
      <title>{intl.formatMessage(messages["profile.page.title"], { siteName: getConfig().SITE_NAME })}</title>
    </Helmet>
  );
};

Head.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Head);
