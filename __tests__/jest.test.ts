import { describe, expect, test } from "@jest/globals";

import { validEmail, validSpace, Version } from "../index";

describe('validate email', () => {
  test('123456789@qq.com to be true', () => {
    expect(validEmail('123456789@qq.com')).toBe(true);
  });
  test('null to be true', () => {
    expect(validSpace(null)).toBe(true);
  });
  test('undefined to be true', () => {
    expect(validSpace(undefined)).toBe(true);
  });
  test('"" to be true', () => {
    expect(validSpace("")).toBe(true);
  });
  test('\n\r to be true', () => {
    expect(validSpace('\n\r')).toBe(true);
  });

  /**
   * toBe uses Object.is to test exact equality
   * toBe
   * 
   * check the value of an object
   * toEqual
   * 
   * toBeNull
   * toBeTruthy
   * toBeFalsy
   * 
   * toBeGreaterThan
   * toBeGreaterThanOrEqual
   * toBeLessThan
   * 
   * toMatch(/stop/)
   * 
   * toContain
   * toHaveLength
   * 
   * 
   */
  test('1+1 is not 3', () => {
    expect(1+1).not.toBe(3);
  })

  test('Version is 1.0.5', () => {
    expect(Version).toMatch('1.0.5');
  })
});