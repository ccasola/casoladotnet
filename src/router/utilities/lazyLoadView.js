const lazyLoadView = function(asyncView, loadingComponent, errorComponent) {
  const AsyncHandler = () => ({
    component: asyncView,
    // A component to use while the component is loading.
    loading: loadingComponent,
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 0,
    // A fallback component in case the timeout is exceeded
    // when loading the component.
    error: errorComponent,
    // Time before giving up trying to load the component.
    // Default: Infinity (milliseconds).
    timeout: 30000
  });

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      // Transparently pass any props or children
      // to the view component.
      return h(AsyncHandler, data, children);
    }
  });
};

export default lazyLoadView;
