import { useForm } from "react-hook-form";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { cn } from "../libs";

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
  onChange,
}: {
  onChange?: (fieldName: CONTACT_FORM_FIELDS, value: string) => void;
}) => {
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
    console.log("Form submitted with values:", values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name={CONTACT_FORM_FIELDS.NAME}
          render={({ field }) => (
            <FormItem>
              <FormLabel>_name:</FormLabel>
              <FormControl
                className={cn({
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
              <FormLabel>_email:</FormLabel>
              <FormControl
                className={cn({
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
              <FormLabel>_message</FormLabel>
              <FormControl
                className={cn({
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ContactForm;
