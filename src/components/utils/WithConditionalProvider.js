export const WithConditionalProvider = ({ children, conditional, Provider, ...props }) => {
  if (!conditional)
    return children;

  return (
    <Provider {...props}>
      {children}
    </Provider>
  )
}
