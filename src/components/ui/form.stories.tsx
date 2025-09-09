import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Checkbox } from "./checkbox";

// Define validation schemas for different examples
const basicSchema = z.object({
  email: z.email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
});

const complexSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  age: z
    .number()
    .min(18, "Must be at least 18 years old")
    .max(120, "Must be less than 120"),
  bio: z.string().min(10, "Bio must be at least 10 characters").optional(),
  terms: z.boolean().refine((val) => val === true, "You must accept the terms"),
});

const meta: Meta<typeof Form> = {
  title: "Components/UI/Form",
  component: Form,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A comprehensive form system built with React Hook Form and Zod validation. Provides form state management, validation, and accessible form controls.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<Meta<typeof Form>>;

export const BasicForm: Story = {
  render: () => {
    const form = useForm({
      resolver: zodResolver(basicSchema),
      defaultValues: {
        email: "",
        name: "",
      },
    });

    const onSubmit = (data: z.infer<typeof basicSchema>) => {
      alert(JSON.stringify(data, null, 2));
    };

    return (
      <div className="w-96 p-6 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Basic Form</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormDescription>This is your display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </Form>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Basic form with name and email fields, including validation.",
      },
    },
  },
};

export const ComplexForm: Story = {
  render: () => {
    const form = useForm({
      resolver: zodResolver(complexSchema),
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        age: 18,
        bio: "",
        terms: false,
      },
    });

    const onSubmit = (data: z.infer<typeof complexSchema>) => {
      alert(JSON.stringify(data, null, 2));
    };

    return (
      <div className="w-96 p-6 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Registration Form</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john@example.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    We'll never share your email with anyone.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) =>
                        field.onChange(parseInt(e.target.value) || 0)
                      }
                    />
                  </FormControl>
                  <FormDescription>
                    You must be at least 18 years old.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about yourself..."
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    A brief description about yourself.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Accept terms and conditions</FormLabel>
                    <FormDescription>
                      You agree to our Terms of Service and Privacy Policy.
                    </FormDescription>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Register
            </button>
          </form>
        </Form>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complex registration form with multiple field types and validation rules.",
      },
    },
  },
};

export const ValidationStates: Story = {
  render: () => {
    const form = useForm({
      resolver: zodResolver(basicSchema),
      defaultValues: {
        email: "invalid-email",
        name: "J", // Too short
      },
    });

    const onSubmit = (data: z.infer<typeof basicSchema>) => {
      alert(JSON.stringify(data, null, 2));
    };

    // Trigger validation on mount
    React.useEffect(() => {
      form.trigger();
    }, [form]);

    return (
      <div className="w-96 p-6 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Validation Example</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormDescription>
                    Must be at least 2 characters long.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Must be a valid email address.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </Form>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Form showing validation errors with pre-filled invalid data.",
      },
    },
  },
};

export const LoginForm: Story = {
  render: () => {
    const loginSchema = z.object({
      email: z.string().email("Please enter a valid email"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      remember: z.boolean().optional(),
    });

    const form = useForm({
      resolver: zodResolver(loginSchema),
      defaultValues: {
        email: "",
        password: "",
        remember: false,
      },
    });

    const onSubmit = (data: z.infer<typeof loginSchema>) => {
      alert(JSON.stringify(data, null, 2));
    };

    return (
      <div className="w-80 p-6 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Login</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your@email.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="••••••••" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="remember"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-sm leading-none">
                    Remember me
                  </FormLabel>
                </FormItem>
              )}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
          </form>
        </Form>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Login form with email, password, and remember me checkbox.",
      },
    },
  },
};

export const ContactForm: Story = {
  render: () => {
    const contactSchema = z.object({
      name: z.string().min(1, "Name is required"),
      email: z.string().email("Please enter a valid email"),
      subject: z.string().min(1, "Subject is required"),
      message: z.string().min(10, "Message must be at least 10 characters"),
    });

    const form = useForm({
      resolver: zodResolver(contactSchema),
      defaultValues: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    });

    const onSubmit = (data: z.infer<typeof contactSchema>) => {
      alert(JSON.stringify(data, null, 2));
    };

    return (
      <div className="w-96 p-6 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your@email.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="What is this about?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please describe your inquiry..."
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Please provide as much detail as possible.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </Form>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Contact form with name, email, subject, and message fields.",
      },
    },
  },
};

export const FieldStates: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        normal: "",
        withDescription: "",
        withError: "",
        disabled: "This field is disabled",
      },
    });

    return (
      <div className="w-96 p-6 border border-gray-200 rounded-lg space-y-4">
        <h3 className="text-lg font-semibold mb-4">Field States</h3>
        <Form {...form}>
          <FormField
            control={form.control}
            name="normal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Normal Field</FormLabel>
                <FormControl>
                  <Input placeholder="Normal input field" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="withDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Field with Description</FormLabel>
                <FormControl>
                  <Input placeholder="Input with helper text" {...field} />
                </FormControl>
                <FormDescription>
                  This is a helpful description for the field.
                </FormDescription>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="withError"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Field with Error</FormLabel>
                <FormControl>
                  <Input placeholder="This field has an error" {...field} />
                </FormControl>
                <FormMessage>This field has an error message</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="disabled"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Disabled Field</FormLabel>
                <FormControl>
                  <Input disabled {...field} />
                </FormControl>
                <FormDescription>This field cannot be edited.</FormDescription>
              </FormItem>
            )}
          />
        </Form>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstration of different field states including normal, with description, with error, and disabled.",
      },
    },
  },
};
