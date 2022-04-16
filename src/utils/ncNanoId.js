import { nanoid } from '@reduxjs/toolkit';
export default function ncNanoId(prefix = 'uni') {
  return `${prefix + nanoid()}_`;
}
