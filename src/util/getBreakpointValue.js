const getBreakpointValue = (breakpoint = '') => Number(breakpoint.slice(0, breakpoint.length - 2));

export default getBreakpointValue;
