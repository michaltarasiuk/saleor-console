import {Link} from "@/shared/components/Link";
import {Routes} from "@/shared/consts/routes";
import {SigninForm} from "../_components/SigninForm";
import {FormHeader} from "../_components/FormHeader";

export default function SigninPage() {
  return (
    <>
      <SigninForm
        header={
          <FormHeader
            title="Sign in"
            description="Please enter your email and password to access your account"
          />
        }
      />
      <span>
        <Link href={Routes.signup}>Don&#39;t have an account? Sign up</Link>
      </span>
    </>
  );
}
