import { isEvent } from '@thynpm/argos-utils';

import { StackFrame as TraceKitStackFrame, StackTrace as TraceKitStackTrace } from './tracekit';

const STACKTRACE_LIMIT = 50;

/**
 * This function creates an exception from an TraceKitStackTrace
 * @param stacktrace TraceKitStackTrace that will be converted to an exception
 *
 */
export function exceptionFromStacktrace(stacktrace) {
  const frames = prepareFramesForEvent(stacktrace.stack);
  let exception = {...stacktrace};
  exception.stack = frames;

  // tslint:disable-next-line:strict-type-predicates
  if (exception.name === undefined && exception.message === '') {
    exception.message = 'Unrecoverable error caught';
  }

  return exception;
}

/**
 * 传入的数据，不一定是源异常，可能是组装过的，例如 onerror 里面就是组装过的
 * 静态资源加载会进入到这里
 */
export function eventFromPlainObject(exception, rejection?: boolean) {
  const event = {
    name: isEvent(exception) ? exception.constructor.name : rejection ? 'UnhandledRejection' : 'Error',
    message: `Non-Error ${
      rejection ? 'promise rejection' : 'exception'
    } captured with keys: ${exception}`,
    mode:'plainObject',
    origin: exception
  };

  return {exception:event};
}

/**
 *
 */
export function eventFromStacktrace(stacktrace: TraceKitStackTrace) {
  const exception = exceptionFromStacktrace(stacktrace);

  return {exception};
}

/**
 *
 */
export function prepareFramesForEvent(stack: TraceKitStackFrame[]) {
  if (!stack || !stack.length) {
    return [];
  }

  let localStack = stack;

  // 控制一下数组大小
  return localStack.slice(0, STACKTRACE_LIMIT);
}

export function eventFromString(
  input: string,
) {
  const event = {
    message: input,
    mode:'string',
    stack:null
  };

  return {exception:event};
}
