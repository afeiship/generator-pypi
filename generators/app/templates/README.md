# <%= project_name %>
> <%= description %>

## installation
```shell
pip install <%= project_name %> -U
```

## usage
```python
import <%- ctx.underscored(project_name) %> as nx

## common methods
nx.includes([1,2,3], 2) # => True
```
