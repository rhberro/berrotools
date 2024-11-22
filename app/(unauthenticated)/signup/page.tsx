import { Anchor } from "@/components/anchor";
import { Button } from "@/components/button";
import { Heading1 } from "@/components/heading1";
import { Paragraph } from "@/components/paragraph";
import { Separator } from "@/components/separator";
import { SignupForm } from "@/modules/authentication";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Signup() {
  return (
    <main className="flex flex-col p-6 items-center justify-center h-screen">
      <div className="flex flex-col max-w-[400px]">
        <Heading1>Get started</Heading1>
        <Paragraph>Create a new account</Paragraph>
        <Button variant="outline" className="mt-10" size="large">
          <GitHubLogoIcon className="w-6 h-6 text-stone-700" />
          Continue with GitHub
        </Button>
        <Separator />
        <SignupForm />
        <Paragraph className="text-center mt-8" size="medium">
          Have an account? <Anchor href="/signin">Sign In Now</Anchor>
        </Paragraph>
        <Paragraph className="text-center mt-20" size="small">
          By continuing, you agree to Berro&apos;s{" "}
          <Anchor href="/terms" size="small">
            Terms of Service
          </Anchor>{" "}
          and{" "}
          <Anchor href="/privacy" size="small">
            Privacy Policy
          </Anchor>
          , and to receive periodic emails with updates.
        </Paragraph>
      </div>
    </main>
  );
}
