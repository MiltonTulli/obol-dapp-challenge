/**
 * @description Function to Capitalize first letter of any string
 */
export function cap(input: string): string {
  if (!input) {
    return input;
  }

  return input.charAt(0).toUpperCase() + input.slice(1);
}
