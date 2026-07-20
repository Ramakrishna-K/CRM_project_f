// const Card = ({
//   title,
//   subtitle,
//   children,
//   className = "",
// }) => {
//   return (
//     <div
//       className={`
//         bg-white
//         rounded-xl
//         shadow-md
//         border
//         border-gray-200
//         p-6
//         ${className}
//       `}
//     >
//       {(title || subtitle) && (
//         <div className="mb-5">
//           {title && (
//             <h2 className="text-xl font-bold text-gray-800">
//               {title}
//             </h2>
//           )}

//           {subtitle && (
//             <p className="text-sm text-gray-500 mt-1">
//               {subtitle}
//             </p>
//           )}
//         </div>
//       )}

//       {children}
//     </div>
//   );
// };

// export default Card;