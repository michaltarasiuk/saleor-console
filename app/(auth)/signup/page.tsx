import {SignupForm} from "../_components/SignupForm";
import {FormHeader} from "../_components/FormHeader";
import {Link} from "@/shared/components/Link";
import {Routes} from "@/shared/consts/routes";

export default function SignupPage() {
  return (
    <>
      <SignupForm
        header={
          <FormHeader
            title="Sign up"
            description="Create your account by entering your email and a password"
          />
        }
      />
      <span>
        <Link href={Routes.signin}>Already have an account? Sign in</Link>
      </span>
    </>
  );
}
