using Microsoft.EntityFrameworkCore.Migrations;

namespace SuncoastOverflow.Migrations
{
    public partial class FixedQuestionTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Asked",
                table: "Questions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Questions",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Asked",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "Questions");
        }
    }
}
