import { PlusGrid, PlusGridItem, PlusGridRow } from "@/components/PlusGrid";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Link } from "@/components/Link";

function CallToAction() {
  return (
    <div className="relative pb-16 pt-20 text-center sm:py-24">
      <hgroup>
        <h1>Thank you for visiting my website</h1>
        <p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          Interested in collaborating?
          <br />
          Let&apos;s have a chat!
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-xs text-sm/6 text-gray-500">
        Feel free to reach out, I&apos;m always open to new opportunities and
        challenges.
      </p>
      <div className="mt-6 flex items-center justify-center gap-6">
        <Button
          className="w-full sm:w-auto uppercase text-[11px] text-primary font-secondary tracking-extra-wide"
          href="mailto:malgosz74@gmail.com"
        >
          Email
        </Button>
        <Button
          className="w-full sm:w-auto uppercase text-[11px] text-primary font-secondary tracking-extra-wide"
          href="https://www.linkedin.com/in/malgorzataszynkarczuk/"
        >
          LinkedIn
        </Button>
      </div>
    </div>
  );
}

function SocialIconLinkedIn(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  );
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://www.linkedin.com/in/malgorzataszynkarczuk/"
        target="_blank"
        aria-label="Visit us on LinkedIn"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconLinkedIn className="size-8" />
      </Link>
    </>
  );
}

function Copyright() {
  return (
    <div className="text-sm/6 text-gray-950">
      &copy; {new Date().getFullYear()} Małgorzata Szynkarczuk
    </div>
  );
}

function DevByVabank() {
  return (
    <div className="text-sm/6 text-gray-950">
      Developed with ❤️❤️ by{" "}
      <Link href="https://vabank.dev" target="_blank" className="font-bold">
        vabank.dev
      </Link>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#F5F5F5]">
      <Container>
        <CallToAction />
        <PlusGrid className="pb-16">
          <PlusGridRow className="flex justify-between">
            <div>
              <PlusGridItem className="py-3">
                <Copyright />
              </PlusGridItem>
            </div>
            <div className="flex">
              <PlusGridItem className="flex items-center gap-8 py-3">
                <SocialLinks />
              </PlusGridItem>
            </div>
          </PlusGridRow>
          <PlusGridRow className="flex justify-center">
            <div>
              <PlusGridItem className="py-3">
                <DevByVabank />
              </PlusGridItem>
            </div>
          </PlusGridRow>
        </PlusGrid>
      </Container>
    </footer>
  );
}
