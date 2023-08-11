import urlFor from "../queries/returnImage";
import Image from "next/image";

// export const ptComponents = {
//   types: {
//     image: ({
//       value,
//     }: {
//       value: {
//         _type: string;
//         _key: string;
//         asset: { _ref: string; _type: string };
//       };
//     }) => {
//       // console.log(value);
//       if (!value?.asset?._ref) {
//         return null;
//       }
//       const src = urlFor(value)
//         .width(320)
//         .height(240)
//         .fit("max")
//         .auto("format")
//         .url();
//       return (
//         <Image
//           alt={value?.asset?._ref || " "}
//           loading="lazy"
//           src={src}
//           width={500}
//           height={500}
//           unoptimized={true}
//         />
//       );
//     },
//   },
// };
