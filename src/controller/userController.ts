import { Controller } from "../core/decorators/controller.decorator";
import { Get, Post, Delete, Patch } from "../core/decorators/method.decorator";
import { Body, Inject, Param } from "../core/decorators/params.decorator";
import { userService } from "../services/user.service";
@Controller("users")
class userControler {
  constructor(@Inject(userService) private useService: userService) {}

  @Get()
  get() {
    return this.useService.find();
  }

  @Post()
  add(@Body() body: any) {
    return this.useService.createUser(body);
  }
  @Post("post/:id")
  test23() {
    return "test xem lay params";
  }

  @Get("/test")
  chaoem() {
    return "co quyen truy cap";
  }
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.useService.findOne(id);
  }
  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.useService.delete(id);
  }

  onInit() {
    return console.log("Test init controller");
  }
}
export default userControler;
