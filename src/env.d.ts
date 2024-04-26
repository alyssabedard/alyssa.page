/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// interface Env {
//     ENVIRONMENT: string;
// }
// declare namespace App {
//     interface Locals extends WorkerRuntime {
//     }
// }
  
// interface WorkerRuntime {
// 	runtime: {
// 		waitUntil: (promise: Promise<any>) => void;
// 		env: Env;
// 		cf: CFRequest['cf'];
// 		caches: typeof caches;
// 	};
// }



// export const onRequest: PagesFunction<Env> = async (context) => {
//     if (context.env.ENVIRONMENT === 'development') {
//         return new Response('This is a local environment!');
//     } else {
//         return new Response('This is a live environment');
//     }
// }