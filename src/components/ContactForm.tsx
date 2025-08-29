import { useForm } from "react-hook-form";
import { email, set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { cn } from "@libs/utils";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

export enum CONTACT_FORM_FIELDS {
  NAME = "name",
  EMAIL = "email",
  MESSAGE = "message",
}

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 100;
const MIN_MESSAGE_LENGTH = 5;
const MAX_MESSAGE_LENGTH = 1000;

const formSchema = z.object({
  [CONTACT_FORM_FIELDS.NAME]: z
    .string()
    .min(MIN_NAME_LENGTH, `Name must be at least ${MIN_NAME_LENGTH} characters`)
    .max(MAX_NAME_LENGTH, `Name must be at most ${MAX_NAME_LENGTH} characters`),
  [CONTACT_FORM_FIELDS.EMAIL]: z
    .email("Please enter a valid email address")
    .max(
      MAX_EMAIL_LENGTH,
      `Email must be at most ${MAX_EMAIL_LENGTH} characters`
    ),
  [CONTACT_FORM_FIELDS.MESSAGE]: z
    .string()
    .min(
      MIN_MESSAGE_LENGTH,
      `Message must be at least ${MIN_MESSAGE_LENGTH} characters`
    )
    .max(
      MAX_MESSAGE_LENGTH,
      `Message must be at most ${MAX_MESSAGE_LENGTH} characters`
    ),
});

const DEFAULT_VALUES = {
  [CONTACT_FORM_FIELDS.NAME]: "",
  [CONTACT_FORM_FIELDS.EMAIL]: "",
  [CONTACT_FORM_FIELDS.MESSAGE]: "",
};

const ContactForm = ({
  onSuccess,
  onError,
  onChange,
}: {
  onSuccess?: () => void;
  onError?: (error: any) => void;
  onChange?: (fieldName: CONTACT_FORM_FIELDS, value: string) => void;
}) => {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const handleOnChange = (fieldName: string, value: string) => {
    onChange?.(fieldName as CONTACT_FORM_FIELDS, value);
    form.setValue(fieldName as CONTACT_FORM_FIELDS, value);
    form.clearErrors(fieldName as CONTACT_FORM_FIELDS); // Clear error for the field
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const params = {
      name: values[CONTACT_FORM_FIELDS.NAME],
      email: values[CONTACT_FORM_FIELDS.EMAIL],
      subject: "Contact from MyPortfolio website",
      message: values[CONTACT_FORM_FIELDS.MESSAGE],
    };

    setIsSubmitDisabled(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          ...params,
        },
        {
          blockHeadless: true,
          limitRate: {
            id: "my-portfolio-contact-form",
            throttle: 10000, // Throttle requests to 1 per 10 seconds
          },
        }
      )
      .then(
        () => {
          onSuccess?.();
          form.reset(DEFAULT_VALUES);
        },
        (error) => {
          onError?.(error);
        }
      )
      .finally(() => {
        setIsSubmitDisabled(false);
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name={CONTACT_FORM_FIELDS.NAME}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-heading-foreground">_name:</FormLabel>
              <FormControl
                className={cn({
                  "bg-background/70":
                    !form.formState.errors[CONTACT_FORM_FIELDS.NAME],
                  "border-error-background":
                    form.formState.errors[CONTACT_FORM_FIELDS.NAME],
                  "bg-error-background/30":
                    form.formState.errors[CONTACT_FORM_FIELDS.NAME],
                })}
              >
                <Input
                  {...field}
                  maxLength={MAX_NAME_LENGTH}
                  onChange={(e) => handleOnChange(field.name, e.target.value)}
                />
              </FormControl>
              <FormMessage
                className={cn({
                  "text-error-background":
                    form.formState.errors[CONTACT_FORM_FIELDS.NAME],
                })}
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={CONTACT_FORM_FIELDS.EMAIL}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-heading-foreground">_email:</FormLabel>
              <FormControl
                className={cn({
                  "bg-background/70":
                    !form.formState.errors[CONTACT_FORM_FIELDS.NAME],
                  "border-error-background":
                    form.formState.errors[CONTACT_FORM_FIELDS.EMAIL],
                  "bg-error-background/30":
                    form.formState.errors[CONTACT_FORM_FIELDS.EMAIL],
                })}
              >
                <Input
                  {...field}
                  maxLength={MAX_EMAIL_LENGTH}
                  onChange={(e) => handleOnChange(field.name, e.target.value)}
                />
              </FormControl>
              <FormMessage
                className={cn({
                  "text-error-background":
                    form.formState.errors[CONTACT_FORM_FIELDS.EMAIL],
                })}
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={CONTACT_FORM_FIELDS.MESSAGE}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-heading-foreground">
                _message
              </FormLabel>
              <FormControl
                className={cn({
                  "bg-background/70":
                    !form.formState.errors[CONTACT_FORM_FIELDS.NAME],
                  "border-error-background":
                    form.formState.errors[CONTACT_FORM_FIELDS.MESSAGE],
                  "bg-error-background/30":
                    form.formState.errors[CONTACT_FORM_FIELDS.MESSAGE],
                })}
              >
                <Textarea
                  {...field}
                  maxLength={MAX_MESSAGE_LENGTH}
                  placeholder="Enter your message here ..."
                  onChange={(e) => handleOnChange(field.name, e.target.value)}
                />
              </FormControl>
              <FormMessage
                className={cn({
                  "text-error-background":
                    form.formState.errors[CONTACT_FORM_FIELDS.MESSAGE],
                })}
              />
            </FormItem>
          )}
        />
        <Button disabled={isSubmitDisabled} type="submit">
          {isSubmitDisabled && <Loader2Icon className="animate-spin" />}
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
