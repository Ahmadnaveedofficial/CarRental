const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export default asyncHandler;


// import { NextRequest, NextResponse } from "next/server";

// export function asyncHandler(
//   handler: (req: NextRequest) => Promise<NextResponse>
// ) {
//   return async (req: NextRequest) => {
//     try {
//       return await handler(req);
//     } catch (error: any) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: error.message || "Internal Server Error",
//         },
//         {
//           status: error.statusCode || 500,
//         }
//       );
//     }
//   };
// }
