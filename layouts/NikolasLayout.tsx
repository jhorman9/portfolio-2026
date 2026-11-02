"use client";
import EmbedPopup from "@/components/EmbedPopup";
import { nicolasUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import type { ReactNode } from "react";
import Copyright from "./Copyright";
import Cursor from "./Cursor";
import Footer from "./Footer";
import Header, { OnePageHeader } from "./Header";

interface NikolasLayoutProps {
  children: ReactNode;
  noFooter?: boolean;
  onepage?: boolean;
}

const NikolasLayout = ({ children, noFooter = false, onepage = false }: NikolasLayoutProps) => {
  useEffect(() => {
    nicolasUtility.animation();
    nicolasUtility.dataImage();
    nicolasUtility.imgToSVG();
    nicolasUtility.customCursor();
    nicolasUtility.interactiveImage();
  }, []);
  return (
    <Fragment>
      <EmbedPopup />
      <div className="nicolas_sm_wrapper_all" data-magic-cursor="show">
        {/* Magic Cursor Values Are: "show" and "hide" */}
        {onepage ? <OnePageHeader /> : <Header />}
        {children}
        {/* Footer */}
        {!noFooter && (
          <Fragment>
            <Footer />
            <Copyright />
          </Fragment>
        )}
        {/* /Footer */}
        {/* CURSOR */}
        <Cursor />
        {/* /CURSOR */}
      </div>
    </Fragment>
  );
};
export default NikolasLayout;
