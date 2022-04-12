// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 68FsTXs8g8hH9RGmk7R9kt
// Component: TXomS-bimx
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_minimalist_about_me_page.module.css"; // plasmic-import: 68FsTXs8g8hH9RGmk7R9kt/projectcss
import sty from "./PlasmicHomepage4.module.css"; // plasmic-import: TXomS-bimx/css

export const PlasmicHomepage4__VariantProps = new Array();

export const PlasmicHomepage4__ArgProps = new Array();

function PlasmicHomepage4__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__wTIiU)}>
            <p.PlasmicImg
              data-plasmic-name={"selection"}
              data-plasmic-override={overrides.selection}
              alt={""}
              className={classNames(sty.selection)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: "/plasmic/minimalist_about_me_page/images/transactionrecordeDpng.png",
                fullWidth: 1891,
                fullHeight: 637,
                aspectRatio: undefined
              }}
            />

            <div className={classNames(projectcss.all, sty.freeBox__wtxlQ)} />

            <div className={classNames(projectcss.all, sty.freeBox__hv4Er)} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "selection"],
  selection: ["selection"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage4__ArgProps,
      internalVariantPropNames: PlasmicHomepage4__VariantProps
    });

    return PlasmicHomepage4__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage4";
  } else {
    func.displayName = `PlasmicHomepage4.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage4 = Object.assign(
  // Top-level PlasmicHomepage4 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    selection: makeNodeComponent("selection"),
    // Metadata about props expected for PlasmicHomepage4
    internalVariantProps: PlasmicHomepage4__VariantProps,
    internalArgProps: PlasmicHomepage4__ArgProps
  }
);

export default PlasmicHomepage4;
/* prettier-ignore-end */
