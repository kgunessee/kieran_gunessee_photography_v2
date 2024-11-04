export function HorizontalRule({ marginBottom = "mb-4", marginTop = "mt-0" }) {
  return (
    <hr
      className={`${marginBottom} ${marginTop} h-[1px] border-none bg-almostBlack/30 dark:bg-white/30`}
    />
  );
}
