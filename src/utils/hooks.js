// import { useLocation } from "react-router-dom";

// export default function useQurey(){
//     return new URLSearchParams(useLocation().search);
// }

import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import { cleanObject, subset } from ".";

// export const useSetUrlSearchParams = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   return (params) => {
//     const newParams = cleanObject({
//       ...Object.fromEntries(searchParams),
//       ...params,
//     });
//     return setSearchParams(newParams);
//   };
// };

// export const useUrlQueryParams = (keys) => {
//   const [searchParams] = useSearchParams();
//   const setSearchParams = useSetUrlSearchParams();
//   const [stateKeys] = useState(keys);
//   return [
//     useMemo(
//       () => subset(Object.fromEntries(searchParams), stateKeys),
//       [searchParams, stateKeys]
//     ),
//     (params) => setSearchParams(params),
//   ];
// };