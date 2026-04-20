import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-amber-50 via-rose-50 to-sky-50 px-6 py-16 font-sans dark:from-zinc-900 dark:via-zinc-950 dark:to-black">
      <main className="w-full max-w-2xl rounded-3xl border border-zinc-200/60 bg-white/90 p-8 shadow-xl shadow-zinc-900/5 backdrop-blur-sm sm:p-12 dark:border-white/10 dark:bg-zinc-950/80 dark:shadow-black/40">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
          <Image
            src="/avatar.png"
            alt="Ryuji Watanabe"
            width={144}
            height={144}
            priority
            className="h-32 w-32 shrink-0 rounded-full bg-amber-100 ring-1 ring-zinc-200 sm:h-36 sm:w-36 dark:bg-zinc-800 dark:ring-white/10"
          />
          <div className="flex-1 text-center sm:text-left">
            <p className="font-mono text-sm tracking-wider text-zinc-500 dark:text-zinc-400">
              @ae14watanabe
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl dark:text-zinc-50">
              渡辺 龍二
            </h1>
            <p
              style={{ fontFamily: "var(--font-fraunces), serif" }}
              className="mt-1 text-xl italic tracking-wide text-zinc-500 dark:text-zinc-400"
            >
              Ryuji WATANABE
            </p>
            <p className="mt-5 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Web/AI Engineer @ GMO Pepabo, Inc.
              <br />
              Ph.D. in Information Engineering.
            </p>
          </div>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-3 text-sm sm:justify-start">
          <li>
            <a
              href="https://x.com/ae14watanabe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 font-medium text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-white/30 dark:hover:bg-zinc-800"
            >
              <span aria-hidden>𝕏</span>
              <span>x.com/ae14watanabe</span>
            </a>
          </li>
          <li>
            <a
              href="https://speakerdeck.com/ae14watanabe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 font-medium text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-white/30 dark:hover:bg-zinc-800"
            >
              <span aria-hidden>◆</span>
              <span>speakerdeck.com/ae14watanabe</span>
            </a>
          </li>
          <li>
            <a
              href="https://qiita.com/ae14watanabe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 font-medium text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-white/30 dark:hover:bg-zinc-800"
            >
              <span aria-hidden>Q</span>
              <span>qiita.com/ae14watanabe</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ae14watanabe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 font-medium text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-white/30 dark:hover:bg-zinc-800"
            >
              <svg
                aria-hidden
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <span>github.com/ae14watanabe</span>
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}
