const asyncHandler = (requestHandler) => {
    return (req, res, next) =>{
        Promiser.resolve(requestHandler(req, res, next)).
        catch((err)=>next(err))
    }
}

export {asyncHandler}