import { Button as PlasmaButton } from "@salutejs/plasma-web";
import styled from "styled-components";

import s from "./styles.module.css";
import { ButtonProps } from "./types";

const SCREENS = {
  xl: 1440,
  lg: 1280,
  md: 1024,
  sm: 768,
  xs: 0,
};

const b = {
  min768: `min-width: ${SCREENS.sm}px`,
  max768: `max-width: ${SCREENS.sm}px`,
  min1024: `min-width: ${SCREENS.md}px`,
  max1024: `max-width: ${SCREENS.md}px`,
  min1280: `min-width: ${SCREENS.lg}px`,
  max1280: `max-width: ${SCREENS.lg}px`,
  min1440: `min-width: ${SCREENS.xl}px`,
  max1440: `max-width: ${SCREENS.xl}px`,
};

// export const Button = (props: ButtonProps) => (
//   <PlasmaButton {...props} className={s.root} />
// );

export const Button = PlasmaButton;

// export const Button = styled(PlasmaButton)`
//   height: 0.5rem;
//   padding: 0.5rem 0.5rem;
//   border-radius: 1px;

//   @media screen and (${b.min768}) {
//     height: 1rem;
//     padding: 1rem 1rem;
//     border-radius: 4px;
//   }

//   @media (${b.min1024}) {
//     height: 1.5rem;
//     padding: 1.5rem 1.5rem;
//     border-radius: 8px;
//   }

//   @media (${b.min1280}) {
//     height: 2rem;
//     padding: 2rem 2rem;
//     border-radius: 12px;
//   }

//   @media (${b.min1440}) {
//     height: 4rem;
//     padding: 4rem 4rem;
//     border-radius: 16px;
//   }
// `;
