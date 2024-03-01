#### Role:
- Software Architect, Product Owner

#### Outcome:
- Simple enough architecture for junior devs could easily build out new functionality
- Positive feature success metrics 

#### Background:
Prior to completing the project, the dimension logic was some of the most complex in the codebase. It was a tangled web of nested logic that only the most senior devs could work with. The issue was that there was a lot of complexity in terms of how to identify which types of objects would receive which types of dimensions, where the dimensions needed be pulled from. For example, dimensions on straight components need to get pulled from the of the pipe if it is flanged, otherwise the center of the end fitting, but we need different specialized handling for different types of content that a use might have in their model.

To solve this problem, I built-out an OOP architecture that leveraged a Director and Abstract Builder. This allowed all the logic dividing up content types to be distributed to their appropriate Builder to be fully encapsulated within the Director. Then an abstract base class served as a Template for each of the Builders that would need to be build and allowed for a standardized procedure for getting all the data needed to build a dimension. This allowed the even more junior devs to simply implement the abstract class, and then they would only need to fill out the details for the various steps needed for that new dimension type.

#### Scope:
- Refactor the code into a common design pattern to make it easier to work with
- Add new dimension types
   - Angle
   - Rotation
   - Overall Run
   - Overall Edge to Edge
   - Rolling Offset
   - Duct Offset
- Add a UI with options for each dimension type
- Add images to demonstrate what to expect the selected options


