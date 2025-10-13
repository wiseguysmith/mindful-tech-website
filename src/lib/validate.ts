export const isEmail = (value: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

export const isRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const minLength = (value: string, min: number): boolean => {
  return value.length >= min;
};

export const maxLength = (value: string, max: number): boolean => {
  return value.length <= max;
};

export const isUrl = (value: string): boolean => {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};

export const isPhone = (value: string): boolean => {
  return /^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/\s/g, ""));
};

export interface ValidationRule {
  validate: (value: string) => boolean;
  message: string;
}

export const validateField = (value: string, rules: ValidationRule[]): string | null => {
  for (const rule of rules) {
    if (!rule.validate(value)) {
      return rule.message;
    }
  }
  return null;
};

export const commonRules = {
  email: [
    { validate: isRequired, message: "Email is required" },
    { validate: isEmail, message: "Please enter a valid email address" }
  ],
  required: [
    { validate: isRequired, message: "This field is required" }
  ],
  name: [
    { validate: isRequired, message: "Name is required" },
    { validate: (v: string) => minLength(v, 2), message: "Name must be at least 2 characters" },
    { validate: (v: string) => maxLength(v, 50), message: "Name must be less than 50 characters" }
  ],
  message: [
    { validate: isRequired, message: "Message is required" },
    { validate: (v: string) => minLength(v, 10), message: "Message must be at least 10 characters" },
    { validate: (v: string) => maxLength(v, 1000), message: "Message must be less than 1000 characters" }
  ]
};

