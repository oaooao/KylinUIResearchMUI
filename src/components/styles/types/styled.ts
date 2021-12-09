import styled from "../styled";

export type Styled = typeof styled;

export type StyledOptions = Parameters<Styled>[1];

export type StyledInnerOptions<CreateFn extends (...args: any) => any> =
  Parameters<CreateFn>[number];
