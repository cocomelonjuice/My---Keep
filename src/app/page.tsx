import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Command,CommandInput } from "@/components/ui/command"
import { BackpackIcon, BellIcon,Pencil1Icon, ArchiveIcon, TrashIcon, HamburgerMenuIcon, ReloadIcon, DashboardIcon, GearIcon, LayersIcon, PersonIcon } from "@radix-ui/react-icons"
import {ModeToggle} from "@/app/modeToggle"

export default function Home() {
  return (
    <div>

      {/* The goal is to clone UI, not functionality */}
      {/* 1 - mobile responsive - text size -  conatiner witdh, height */}
      {/* 2 - write everything on 1 page first, then split into components when done*/}
      {/* 3 - use shadcn ui/ mui icon/ mantine or any ui library for icon/search bar*/}
      {/* build backend with Postgres Supabase/ Vercel : user input a note -> note go to Postgres table-> data from Postgres fetch, render back on user's UI */}
      
      <div className="border-2">

        <header className="flex flex-wrap items-center max-w-screen-xl justify-between mx-auto p-4"> {/*"flex flex-wrap items-center  border-2 | justify-center gap-2" */} {/*"flex flex-wrap items-center max-w-screen-xl justify-between mx-auto p-4" */}
          <div className="hover:bg-yellow-100 hover:rounded-full min-w-14" ><HamburgerMenuIcon width="24px" height="55px" className="mx-auto my-auto"/></div>
          <div><a href="https://logowik.com/google-keep-vector-logo-5971.html"><img src="https://logowik.com/content/uploads/images/google-keep3316.jpg" width="60" height="80" /></a></div>

          <div><ModeToggle></ModeToggle></div>
          <div><Command className="bg-yellow-100 rounded-md "><CommandInput placeholder="Search"/></Command></div>

          <div className="hover:bg-yellow-100 hover:rounded-full min-w-14"><ReloadIcon width="24px" height="55px" className="mx-auto my-auto"/></div>
          <div className="hover:bg-yellow-100 hover:rounded-full min-w-14"><DashboardIcon width="24px" height="55px" className="mx-auto my-auto"/></div>
          <div className="hover:bg-yellow-100 hover:rounded-full min-w-14"> <GearIcon width="24px" height="55px" className="mx-auto my-auto"/> </div>
          <div className="hover:bg-yellow-100 hover:rounded-full min-w-14"><LayersIcon width="24px" height="55px" className="mx-auto my-auto"/></div>
          <div className="hover:bg-yellow-100 hover:rounded-full min-w-14"><PersonIcon width="24px" height="55px" className="mx-auto my-auto"/></div>
        </header> 
      </div>
      
      <main className = "flex mt-2">

        <div className = "w-1/12">
          <div className="hover:bg-yellow-100 hover:rounded-full  ml-3 "> <BackpackIcon width="24px" height="55px" className="mx-auto my-auto" /></div>
          <div className="hover:bg-yellow-100 hover:rounded-full  ml-3 "><BellIcon width="24px" height="55px" className="mx-auto my-auto" /></div>
          <div className="hover:bg-yellow-100 hover:rounded-full  ml-3 "><Pencil1Icon width="24px" height="55px" className="mx-auto my-auto" /></div>
          <div className="hover:bg-yellow-100 hover:rounded-full  ml-3 "><ArchiveIcon width="24px" height="55px" className="mx-auto my-auto" /></div>
          <div className="hover:bg-yellow-100 hover:rounded-full  ml-3 "><TrashIcon width="24px" height="55px" className="mx-auto my-auto" /></div>
        </div>

        <div className = "w-1/2 mt-6 mx-auto">
          <div><Input placeholder="Take a note" /></div>
          <div>NOTE PANEL</div>
        </div>

      </main>
    </div>
  );
}

/*<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>*/
